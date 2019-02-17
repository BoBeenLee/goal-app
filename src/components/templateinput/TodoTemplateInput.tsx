import _ from "lodash";
import Images from "assets-image";
import React, { Component } from 'react';
import styled from "styled-components/native";

import { colors } from '../../styles';
import { TemplateContainer } from "./style";
import { IconButton } from "../button";
import { GInputText } from "../input";
import { GText } from "../text";

interface ITodoItem {
    label: string;
    isActive?: boolean;
}

interface IProps {
    title?: string;
    defaultTodos: ITodoItem[];
    onBlur?: (todos: ITodoItem[]) => void;
    onToggle?: (todos: ITodoItem[]) => void;
}

interface IStates {
    todos: ITodoItem[];
}

const Container = styled(TemplateContainer)``;

const TemplateInputTitle = styled(GText).attrs({
    weightType: "kreonBold"
})`
    font-size: 24px;
    color: ${colors.gunmetal};
    margin-bottom: 8px;
`;

const Content = styled.View``;

const Row = styled.View`
    flex-direction: row;
    align-items: center;
`;

const CheckBox = styled(IconButton)`
    width: 14px;
    height: 14px;
    margin-right: 8px;
`;

const TodoInputText = styled(GInputText).attrs<{ isActive?: boolean }>({})`
    font-size: 16px;
    color: ${({ isActive }) => isActive ? colors.cloudyBlueTwo : colors.gunmetal};
    margin-bottom: 3px;
    ${({ isActive }) => isActive ? `
    text-decoration: line-through;
    text-decoration-color: ${colors.cloudyBlueTwo};
    ` : ``}
`;

class TodoTemplateInput extends Component<IProps, IStates> {
    constructor(props) {
        super(props);

        this.state = {
            todos: props.defaultTodos
        };
    }

    public render() {
        const { todos } = this.state;
        const { title } = this.props;
        return (
            <Container>
                {title ? <TemplateInputTitle>{title}</TemplateInputTitle> : null}
                <Content>
                    {_.map(todos, (todoItem, index) => {
                        return (
                            <Row key={`todoRow${index}`}>
                                <CheckBox
                                    type="opacity"
                                    source={todoItem.isActive ? Images.check_box_active : Images.check_box_inactive}
                                    onPress={_.partial(this.onToggle, index)} />
                                <TodoInputText
                                    name={`todoInput${index}`}
                                    isActive={todoItem.isActive}
                                    defaultValue={todoItem.label}
                                    onTextBlur={_.partial(this.onBlur, index)}
                                />
                            </Row>
                        );
                    })}

                </Content>
            </Container>
        );
    }

    private onToggle = (index) => {
        this.setState((prevState) => {
            return {
                todos: _.map(prevState.todos, (todoItem, todoItemIndex) => {
                    if (index === todoItemIndex) {
                        return {
                            ...todoItem,
                            isActive: !todoItem.isActive
                        }
                    }
                    return todoItem;
                })
            };
        }, () => {
            const { todos } = this.state;
            const { onToggle } = this.props;

            if (onToggle) {
                onToggle(todos);
            }
        })
    }

    private onBlur = (index: number, text: string) => {
        const { todos: prevTodo } = this.state;
        const resultTodos = _.map(prevTodo, (todo, todoIndex) => {
            if (todoIndex !== index) {
                return todo;
            }
            return {
                ...todo,
                label: text
            };
        });
        if (index === prevTodo.length - 1 && !_.isEmpty(text)) {
            this.setState({
                todos: [...resultTodos, { label: "", isActive: false }]
            }, this.afterBlur)

            return;
        } else if (index === prevTodo.length - 2 && _.isEmpty(text)) {
            this.setState({
                todos: _.slice(resultTodos, 0, prevTodo.length - 1)
            }, this.afterBlur);
            return;
        }
        this.setState({
            todos: resultTodos
        }, this.afterBlur);
    };

    private afterBlur = () => {
        const { todos } = this.state;
        const { onBlur } = this.props;
        if (onBlur) {
            onBlur(todos);
        }
    }
}

export default TodoTemplateInput;
