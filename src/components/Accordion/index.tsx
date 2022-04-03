import React from 'react';
import { useState } from 'react';
import {
    Container,
    ItemContainer,
    ItemTitle,
    ItemControl,
    ItemBodyContainer,
    ItemBody,
} from './styles';
import { IAccordion, IAccordionItem } from './types';

const AccordionItem = ({ data, onToggle, isActive }: any) => {
    const { title, body } = data;

    return (
        <ItemContainer>
            <ItemTitle onClick={onToggle} $isActive={isActive}>
                {title}
                <ItemControl>{isActive ? `-` : `+`}</ItemControl>
            </ItemTitle>
            <ItemBodyContainer>
                <ItemBody $isActive={isActive}>{body}</ItemBody>
            </ItemBodyContainer>
        </ItemContainer>
    )
}

export const Accordion = ({ props, data }: IAccordion) => {
    const [clicked, setClicked] = useState(0);

    const handleToggle = (index) => {
        if (clicked === index) {
            return setClicked(0);
        }
        else {
            setClicked(index);
        }
    }
    return (<Container>
        <h1>{props?.title}</h1>
        {data.map((item: IAccordionItem, index: number) => (
            <AccordionItem
                isActive={clicked === index}
                onToggle={() => handleToggle(index)}
                key={index}
                data={item} />
        )
        )}
    </Container>)
}