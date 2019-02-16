import _ from "lodash";
import Images from "assets-image";
import React, { Component } from 'react';
import styled from "styled-components/native";

import { GText } from '../text';
import { colors } from '../../styles';
import { TemplateContainer } from "./style";
import { IconButton } from "../button";

interface ITodoItem {
    label: string;
    isActive?: boolean;
}

interface IProps {
    defaultTodos: ITodoItem[]
}

interface IStates {
    todos: ITodoItem[];
}

const Container = styled(TemplateContainer)``;


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

const TodoText = styled(GText).attrs<{ isActive?: boolean }>({})`
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

        return (
            <Container>
                <Content>
                    {_.map(todos, (todoItem, index) => {
                        return (
                            <Row key={todoItem.label}>
                                <CheckBox
                                    type="opacity"
                                    source={todoItem.isActive ? Images.check_box_active : Images.check_box_inactive}
                                    onPress={_.partial(this.onToggle, index)} />
                                <TodoText isActive={todoItem.isActive}>
                                    {todoItem.label}
                                </TodoText>
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
        })
    }
}

export default TodoTemplateInput;
