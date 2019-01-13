import React from 'react';
import Carousel from 'react-native-snap-carousel';
import styled from "styled-components/native";

interface IProps<T> {
    data: T[];
    sliderWidth: number;
    itemWidth: number;
    renderItem: ({ item, index }: { item: T, index: number }) => React.ReactNode;
}

const Container = styled.View``;

export class TutorialCarousel<T> extends React.Component<IProps<T>> {
    public carouselRef = null;

    public render() {
        const { data, sliderWidth, itemWidth, renderItem } = this.props;
        return (
            <Container>
                <Carousel
                    ref={this.setCarouselRef}
                    data={data}
                    renderItem={renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                />
            </Container>
        );
    }

    private setCarouselRef = (ref) => {
        this.carouselRef = ref;
    }
}
