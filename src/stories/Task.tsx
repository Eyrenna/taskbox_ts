import React from 'react';
import StarIcon from '@material-ui/icons/Star';

interface TaskProps {                                                                           
    id :  string,                                                                               //
    title : string,                                                                             //  
    state : string,                                                                             //  Definiendo el componente tipo 'Task'
    onArchiveTask : (id:string) => void,                                                        //
    onPinTask : (id:string) => void                                                             //
}

export const Task = ({id, title, state, onArchiveTask, onPinTask}: TaskProps) => {                                                                              //  Lo que renderizará 
    return (
          <div className={`list-item ${state}`}>
            <label className="checkbox">
              <input
                type="checkbox"
                defaultChecked={state === 'TASK_ARCHIVED'}
                disabled={true}
                name="checked"
              />
              <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
            </label>
            <div className="title">
              <input 
                type="text" 
                value={title} 
                readOnly={true} 
                placeholder="Input title"
                style={{ textOverflow: 'ellipsis' }} />
            </div>
            <div className="actions" onClick={event => event.stopPropagation()}>
              {state !== 'TASK_ARCHIVED' && (
                <a onClick={() => onPinTask(id)}>
                  <StarIcon/>
                </a>
              )}
            </div>
          </div>
      );
};

function onArchiveTask(id: string): void {
  throw new Error('Function not implemented.');
}


function onPinTask(id: string): void {
  throw new Error('Function not implemented.');
}
