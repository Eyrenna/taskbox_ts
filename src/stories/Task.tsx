import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import { Box, Checkbox, Grid, Paper, Typography } from '@material-ui/core';

interface TaskProps {                                                                           
    id :  string,                                                                               //
    title : string,                                                                             //  
    state : string,                                                                             //  Definiendo el componente tipo 'Task'
    onArchiveTask : (id:string) => void,                                                        //
    onPinTask : (id:string) => void                                                             //
}

export const Task = ({id, title, state, onArchiveTask, onPinTask}: TaskProps) => {                                                                              //  Lo que renderizará 
    return (
      <Paper>
          <Grid container className={`list-item ${state}`} direction="row" alignItems="baseline">
            <Grid item>
              <Checkbox
                checked={state === 'TASK_ARCHIVED'}
                disabled={true}
                name="isChecked"
              />
            </Grid>
            <Grid item>
              <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
              <Typography>
                  {title} 
              </Typography>
            </Grid>
            <Grid item onClick={event => event.stopPropagation()}>
              {state !== 'TASK_ARCHIVED' && (
                <a onClick={() => onPinTask(id)}>
                  <StarIcon/>
                </a>
              )}
            </Grid>
          </Grid>
      </Paper>
      );
};

export default Task;
