import React, { Component } from 'react';
import styled from "styled-components/native";

import { GText } from "../text";

const Container = styled.View``;

const TaskText = styled(GText)``;

class TaskCheckBox extends Component {
    public render() {
        return (
            <Container>
                <TaskText>Task1</TaskText>
            </Container>
        );
    }
}

export default TaskCheckBox;
