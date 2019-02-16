import Images from "assets-image";
import React, { Component } from 'react';
import styled from "styled-components/native";
import Accordion from 'react-native-collapsible/Accordion';

import { ITemplateProps } from '../../model/Project';
import { GText } from '../text';
import { colors } from '../../styles';
import { TouchableOpacity } from "react-native";

interface IStates {
    activeSections: ISectionProps[];
    containerWidth: number;
}

const Container = styled.View`
    width: 100%;
`;

const Header = styled.View`
    height: 51px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled(GText).attrs({
    weightType: "kreonBold"
})`
    font-size: 24px;
    color: ${colors.gunmetal};
`;

const ArrowIcon = styled.Image`
    width: 17px;
    height: 10px;
`;

const AccordionContent = styled.View`
    flex: 1;
    background-color: #f8f9fa;
`;

const Text = styled.Text``;

interface ISectionProps extends ITemplateProps {
    title: string;
}

const SECTIONS: ISectionProps[] = [
    {
        title: 'To do list',
        type: "TODO"
    },
    {
        title: 'Diary',
        type: "Diary"
    },
    {
        title: 'OX',
        type: "OX"
    },
    {
        title: 'Time',
        type: "Time"
    }
];

class DiscoveryAccordion extends Component<any, IStates> {
    constructor(props: any) {
        super(props);
        this.state = {
            containerWidth: 0,
            activeSections: []
        };
    }

    public render() {
        const { containerWidth } = this.state;
        return (
            <Container onLayout={this.onLayout}>
                <Accordion
                    containerStyle={{
                        width: containerWidth
                    }}
                    sections={SECTIONS}
                    touchableComponent={TouchableOpacity}
                    activeSections={this.state.activeSections as any}
                    renderHeader={this.renderHeader}
                    renderContent={this.renderContent}
                    onChange={this.updateSections}
                />
            </Container>
        );
    }

    private renderHeader = section => {
        return (
            <Header>
                <Title>{section.title}</Title>
                <ArrowIcon source={Images.btn_down_arrow} />
            </Header>
        );
    };

    private renderContent = section => {
        return (
            <AccordionContent>
                <Text>{section.title}</Text>
            </AccordionContent>
        );
    };

    private updateSections = activeSections => {
        this.setState({ activeSections });
    };

    private onLayout = (event: any) => {
        const { width } = event.nativeEvent.layout;
        this.setState({
            containerWidth: width
        });
    };
}

export default DiscoveryAccordion;
