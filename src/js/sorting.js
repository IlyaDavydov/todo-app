import { compareAsc } from "date-fns";

/* the function sorts array by the status. if the statuses are equals, then the function sort array by the date
if the dates are also equals, the function sorts it by priority
*/

export class Sorting {
    
    taskSort(array) {
        array.sort((a, b) => {
            if (a.status && !b.status) {
                return 1;
            }
            else if (!a.status && b.status) {
                return -1;
            }
            else {
                if (compareAsc(a.deadline, b.deadline) === 1) {
                    return 1;
                }
                else if (compareAsc(a.deadline, b.deadline) === -1) {
                    return -1;
                }
                else {
                    if (a.priority === 'high' && b.priority !== 'high') return -1;
                    if (a.priority === 'middle' && b.priority === 'low') return -1;
                    if (a.priority === 'low' && b.priority !== 'low') return 1;
                    return 0;
                }
            }
        });
    }
}
