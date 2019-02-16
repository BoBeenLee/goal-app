import React, { Component } from 'react';
import styled from "styled-components/native";

import { GText } from '../text';
import { colors } from '../../styles';
import { TodoTemplateInput } from '../templateinput';

const Container = styled.View`
    padding-top: 20px;
    padding-bottom: 31px;
`;

const Description = styled(GText)`
    font-size: 16px;
    color: ${colors.blueyGrey};
`;

const SectionTitle = styled(GText)`
    font-size: 17px;
    color: ${colors.gunmetal};
    margin-top: 20px;
    margin-bottom: 10px;
`;

class TodoDiscovery extends Component {
    public render() {
        return (
            <Container>
                <Description>
                    {`하루에 해야 할 일이 여러 개 있는 경우 선택해주세요. 여러 과목을 공부하는 학생, 운동을 하는 다이어터 등에게 추천합니다.`}
                </Description>
                <SectionTitle>
                    여러 과목을 공부하는 학생
                </SectionTitle>
                <TodoTemplateInput
                    defaultTodos={[
                        {
                            label: "영어 지문 5개 해석하기",
                            isActive: false
                        },
                        {
                            label: "수학 23p까지 풀기",
                            isActive: true
                        },
                        {
                            label: "학원 숙제 잊지 않기",
                            isActive: false
                        }
                    ]}
                />
                <SectionTitle>
                    운동을 하는 다이어터
                </SectionTitle>
                <TodoTemplateInput
                    defaultTodos={[
                        {
                            label: "아침 조깅 30분하기",
                            isActive: true
                        },
                        {
                            label: "TV 요가 20분",
                            isActive: true
                        },
                        {
                            label: "학원 숙제 잊지 않기",
                            isActive: false
                        }
                    ]}
                />
            </Container>
        );
    }
}

export default TodoDiscovery;
