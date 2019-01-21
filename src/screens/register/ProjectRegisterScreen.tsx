import React, { Component } from 'react';
import styled from "styled-components/native";
import { Q } from '@nozbe/watermelondb';
import withObservables from '@nozbe/with-observables';

import { GButton, Title } from "../../components";
import { push } from '../../utils/navigator';
import { SCREEN_IDS } from "../constant";

interface IInject {
    projects: any;
}

interface IProps extends IInject {
    componentId: string;
}

const Container = styled.View``;

const TitleView = styled(Title)``;

class ProjectRegisterScreen extends Component<IProps> {
    public render() {
        console.log(this.props.projects);
        return (
            <Container>
                <TitleView>작심삼십일의 목표를 설정해주세요</TitleView>
                <GButton type="default" onPress={this.next}>다음</GButton>
            </Container>
        );
    }

    private next = () => {
        const { componentId } = this.props;
        push(componentId, SCREEN_IDS.MotivationRegisterScreen);
    }
}

const enhance = withObservables([], ({ database }) => ({
    projects: database.collections
        .get('project')
        .query(Q.where('project_name', "Hello3"))
        .observe(),
}))

export default enhance(ProjectRegisterScreen);
