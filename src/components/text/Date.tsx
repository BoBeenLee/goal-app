import React from 'react';
import styled from "styled-components/native";

import GText from "./GText";

const Text = styled(GText)`
    font-size: 12px;
    font-weight: 100;
`;

const Date = ({ children }) => {
    return (
        <Text>{children}</Text>
    );
};

export default Date;
