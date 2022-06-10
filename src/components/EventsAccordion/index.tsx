import React from 'react';
import { useState } from 'react';
import {
    Container,
    ItemContainer,
    ItemTitle,
    ItemControl,
    EventInfo,
    Highlights,
    Highlight,
    FromTo,
    Company,
    Role,
    Where,
    Divider
} from './styles';
import { IEventsAccordion, IEventsAccordionItem } from './types';

const EventsAccordionItem = ({ item, onToggle, isActive, position, total }: IEventsAccordionItem) => {
    console.log('position', position)
    console.log('total', total)
    return (
        <>
            <ItemContainer $isActive={isActive}>
                <ItemTitle onClick={onToggle} $isActive={isActive}>
                    <ItemControl>{isActive ? `-` : `+`}</ItemControl>
                    <EventInfo>
                        <FromTo $isActive={isActive}>{item?.from}-{item?.to}</FromTo>
                        <Company>{item?.company} <span>({item?.industry})</span></Company>
                        <Role>{item?.role}</Role>
                        <Where>{item?.location}</Where>
                    </EventInfo>
                </ItemTitle>
                <Highlights $isActive={isActive}>
                    {item?.highlights?.map((highlight, index) =>
                        <>
                            <Highlight $isActive={isActive} key={`events-accordion-item-${index}`}>{highlight}</Highlight>
                        </>
                    )}
                </Highlights>
                {(position > 1 && position < total) && < Divider />}
            </ItemContainer>
        </>
    )
}



export const EventsAccordion = ({ props, data }: IEventsAccordion) => {
    const [clicked, setClicked] = useState(0);

    const handleToggle = (index: number) => {
        if (clicked === index) {
            return setClicked(0);
        }
        else {
            setClicked(index);
        }
    }
    return (<Container>
        {props?.title && <h1>{props?.title}</h1>}
        {(data && data.length > 0) &&
            data.map((item: IEventsAccordionItem, index: number) => (
                <EventsAccordionItem
                    isActive={clicked === index}
                    onToggle={() => handleToggle(index)}
                    key={index}
                    item={item}
                    position={index + 1}
                    total={data.length} />
            )
            )}
    </Container>)
}