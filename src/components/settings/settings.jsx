import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import { useForm,} from "react-hook-form";
import Bar from "./bar";
import User from "../add/user/user";
import Body from "../add/body/body";
import Age from "../add/age/age";
import Additional from "../add/additional/additional";
import Methods from "../add/methods/methods";
import Phase from "../add/phase/phase";
import Device from "../add/device/device";
import LimitValues from "../add/limit/limitValues";
import Submit from "./submit";


function Settings() {
    const { control, handleSubmit, register, } = useForm();

    const onSubmit = data => {
        console.log(data)
    };


    return (
        <React.Fragment>
            <Bar/>
            <Container maxWidth="lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} xl={12} sm={12} md={12} lg={12}>
                            <Card elevation={5}>
                                <CardContent>
                                    <User control={control}/>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} xl={12} sm={12} md={12} lg={12}>
                            <Card elevation={5}>
                                <CardContent>
                                    <Body control={control}/>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} xl={12} sm={12} md={12} lg={12}>
                            <Card elevation={5}>
                                <CardContent>
                                    <Age control={control}/>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} xl={12} sm={12} md={12} lg={12}>
                            <Card elevation={5}>
                                <CardContent>
                                    <Additional register={register} control={control}/>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} xl={12} sm={12} md={12} lg={12}>
                            <Card elevation={5}>
                                <CardContent>
                                    <Methods control={control}/>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} xl={12} sm={12} md={12} lg={12}>
                            <Card elevation={5}>
                                <CardContent>
                                    <Phase control={control}/>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} xl={12} sm={12} md={12} lg={12}>
                            <Card elevation={5}>
                                <CardContent>
                                    <Device register={register} control={control}/>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} xl={12} sm={12} md={12} lg={12}>
                            <Card elevation={5}>
                                <CardContent>
                                    <LimitValues control={control}/>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} xl={12} sm={12} md={12} lg={12}>
                            <Card elevation={5}>
                                <CardContent>
                                    <Grid item lg={3}>
                                        <Submit/>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </React.Fragment>
    );
}


export default Settings;