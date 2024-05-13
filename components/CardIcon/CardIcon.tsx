import React from 'react';

import {
    Card,
    CardActions,
    CardBody,
    CardContent,
    CardFooter,
    CardHeader,
    CardText,
} from '../Card';

import { CardIconWrapper } from './CardIconWrapper/CardIconWrapper';

export type CardIconProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
    actions?: React.ReactNode;
    className?: string;
    grow?: boolean;
};

import styles from './CardIcon.module.scss';

export const CardIcon: React.FC<CardIconProps> = ({
    title,
    description,
    icon,
    actions,
    className = '',
    grow = false,
}) => (
    <Card className={className}>
        <CardContent gap="small">
            <CardHeader title={title}>
                <CardIconWrapper>{icon}</CardIconWrapper>
            </CardHeader>
            <CardBody grow={grow}>
                <CardText text={description} />
            </CardBody>
            {actions && (
                <CardFooter className={styles.footer}>
                    <CardActions>{actions}</CardActions>
                </CardFooter>
            )}
        </CardContent>
    </Card>
);
