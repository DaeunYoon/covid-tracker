import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return (
            <p>Loading...</p>
        )
    }

    const date = new Date(lastUpdate).toDateString();
    const cardsInfo = [
        { title: 'Infected', style: styles.infected, data: confirmed.value, subtitle: 'Number of active cases of COVID-19' },
        { title: 'Recovered', style: styles.recovered, data: recovered.value, subtitle: 'Number of recoveries from COVID-19' },
        { title: 'Deaths', style: styles.deaths, data: deaths.value, subtitle: 'Number of deaths caused by COVID-19' }
    ]

    return (
        <div className={styles.container}>

            <Grid container spacing={3} justifyContent="center">
                {cardsInfo.map(({ title, style, data, subtitle }, i) => (
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, style)} key={i}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>{title}</Typography>
                            <Typography variant='h5'>
                                <CountUp start={0} end={data} duration={2.5} separator="," />
                            </Typography>
                            <Typography color="textSecondary">{date}</Typography>
                            <Typography varaint="body2">{subtitle}</Typography>
                        </CardContent>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Cards;