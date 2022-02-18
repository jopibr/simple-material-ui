import React from "react";
import {
    Typography,
    AppBar,
    Card,
    CardMedia,
    CardActions,
    CardContent,
    CssBaseline,
    Grid,
    Toolbar,
    Container,
    Button
} from "@material-ui/core";

import {PhotoCamera} from "@material-ui/icons";

import useStyles from "./styles";

const App = () => {
    const classes = useStyles()

    const cardsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <>
            <CssBaseline/>
            <AppBar position={'relative'}>
                <Container maxWidth={'lg'}>
                    <Toolbar>
                        <PhotoCamera className={classes.icon}/>
                        <Typography variant={'h6'}>
                            Simple MaterialUI Layout
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>

            <main>
                <div className={classes.container}>
                    <Container maxWidth={'sm'}>
                        <Typography variant={'h2'} align={'center'} color={'textPrimary'} gutterBottom>
                            Photo Album
                        </Typography>

                        <Typography variant={'h6'} align={'center'} color={'textPrimary'} paragraph>
                            This should be a long text, as log as it can be. Just to test how log text look like in
                            typography.
                            I hope it works well. Thank you for reading.
                        </Typography>

                        <div className={classes.button}>
                            <Grid container={true} spacing={2} color={'primary'} justify={'center'}>
                                <Grid item={true}>
                                    <Button variant={'contained'} color={'primary'}>
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item={true}>
                                    <Button variant={'outlined'} color={'primary'}>
                                        Secondary actions
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>

                <Container className={classes.cardGrid} maxWidth={'md'}>
                    <Grid container={true} spacing={4}>
                        {
                            cardsArray.map((card) => (
                                <Grid item={true} key={card} xs={12} sm={6} md={4}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={'https://source.unsplash.com/random'}
                                            title={'Image Title'}
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom={true} variant={'h5'}>
                                                Heading
                                            </Typography>
                                            <Typography>
                                                This is a media card. You can use this section to describe the content.
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size={'small'} color={'primary'}>View</Button>
                                            <Button size={'small'} color={'primary'}>Edit</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </main>

            <footer className={classes.footer}>
                <Typography variant={'h5'} align={'center'} gutterBottom={true}>
                    Footer
                </Typography>
                <Typography variant={'subtitle1'} align={'center'} color={'textSecondary'}>
                    Something here to give a footer a purpose.
                </Typography>
            </footer>

        </>
    );
}

export default App;



























