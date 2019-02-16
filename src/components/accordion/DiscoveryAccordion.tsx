import Images from "assets-image";
import React, { Component } from 'react';
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import Accordion from 'react-native-collapsible/Accordion';

import { ITemplateProps } from '../../model/Project';
import { GText } from '../text';
import { colors } from '../../styles';
import { TodoDiscovery, DiaryDiscovery, OXDiscovery, TimeDiscovery } from "../discovery";

interface IStates {
    activeSectionIndex: number[];
}

const Header = styled.View`
    height: 51px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-horizontal: 25px;
    background-color: ${colors.white};
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
    background-color: #f8f9fa;
    padding-horizontal: 25px;
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
            activeSectionIndex: []
        };
    }

    public render() {
        return (
            <Accordion
                containerStyle={{
                    width: 375
                }}
                sections={SECTIONS}
                touchableComponent={TouchableOpacity}
                activeSections={this.state.activeSectionIndex as any}
                renderHeader={this.renderHeader}
                renderContent={this.renderContent}
                onChange={this.updateSections}
            />
        );
    }

    private renderHeader = (section, index) => {
        const isActive = this.state.activeSectionIndex.findIndex(sectionIndex => sectionIndex === index) !== -1;
        return (
            <Header>
                <Title>{section.title}</Title>
                <ArrowIcon source={isActive ? Images.btn_up_arrow : Images.btn_down_arrow} />
            </Header>
        );
    };

    private renderContent = section => {
        switch (section.type) {
            case "TODO":
                return (
                    <AccordionContent>
                        <TodoDiscovery />
                    </AccordionContent>);
            case "Diary":
                return (
                    <AccordionContent>
                        <DiaryDiscovery />
                    </AccordionContent>);
            case "OX":
                return (
                    <AccordionContent>
                        <OXDiscovery />
                    </AccordionContent>);
            case "Time":
                return (
                    <AccordionContent>
                        <TimeDiscovery />
                    </AccordionContent>);
            default:
                return (<AccordionContent>
                    <Text>{section.title}</Text>
                </AccordionContent>);
        }
    };

    private updateSections = activeSections => {
        this.setState({ activeSectionIndex: activeSections });
    };
}

export default DiscoveryAccordion;
