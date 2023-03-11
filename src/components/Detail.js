import React, { useEffect } from 'react';
import { github } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import { addRepo } from '../Redux/action';
import Commit from './Commit';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Detail = () => {
    const dispatch = useDispatch();
    const repo = useSelector(state => state.repos);
    const num = useSelector(state => state.pageNum);

    useEffect(_ => {
        (async _ => {
            try {
                const response = await github.get(`&page=${num}`);
                dispatch(addRepo(response.data))
            } catch (e) {
                console.log("Error", e)
            }
        })();
        // eslint-disable-next-line
    }, [dispatch, num])


    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            {(repo[0]?.items.length>0)?(
                (repo[0]?.items)?.map((ele, idx) => {
                        return (
                            <Accordion key={idx} expanded={expanded === idx} onChange={handleChange(idx)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <div>
                                        <Card sx={{ display: 'flex', p: 2, mb: 0, boxShadow: '0', }}>
                                            <CardMedia
                                                component="img"
                                                sx={{ width: 151, border: 2 }}
                                                image={ele.owner.avatar_url}
                                                alt="Live from space album cover"
                                            />
                                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                <CardContent sx={{ flex: '1 0 auto', justifyContent:'space-between' }}>
                                                    <Typography component="div" variant="h5">
                                                        {ele.owner.login}
                                                    </Typography>
                                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                                        {ele.description}
                                                    </Typography>
                                                    <Stack direction="row" spacing={2}>
                                                        <Button sx={{ color: "grey", border: "1px solid grey" }} variant="outlined">
                                                            No.star {ele.watchers_count}
                                                        </Button>
                                                        <Button sx={{ color: "grey", border: "1px solid grey" }} variant="outlined">
                                                            No.issues {ele.open_issues}
                                                        </Button>
                                                        <Typography sx={{ color: 'gray' }}>{ele.pushed_at} by {ele.owner.login}</Typography>
                                                    </Stack>
                                                </CardContent>
                                            </Box>
                                        </Card>
                                    </div>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Stack sx={{ color: "grey", border: "2px solid grey", width: '150px', float: 'right', borderRadius: "4px", m: 4 }} spacing={1}>
                                        <Button sx={{ color: "grey", border: "none" }} variant="outlined">
                                            Commits
                                        </Button>
                                        <Button sx={{ color: "grey", border: "none" }} variant="outlined">
                                            Additions
                                        </Button>
                                        <Button sx={{ color: "grey", border: "none" }} variant="outlined">
                                            Deletions
                                        </Button>
                                    </Stack>
                                    <Stack>
                                      <Commit items = {ele}/>
                                    </Stack>
                                </AccordionDetails>
                            </Accordion>

                        )
                    })
            ) : (<p>Loading...</p>)
            }
        </>
    );
}
export default Detail;
