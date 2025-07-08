import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ITask } from "@/types";
import {  BiTrash } from "react-icons/bi";
import { CiSquareCheck } from "react-icons/ci";


interface IProps {
    task: ITask;
}
const Taskcard = ({task} : IProps) => {
    const {title,description} = task
    return (
        <div className="border px-5 py-3 rounded-s-md">
            <div className="flex justify-between item-center">
                <div className="flex gap-2 item-center">
                    <div className={cn("size-3 rounded-full",{
                        "bg-red-600": task.priority === "High",
                        "bg-yellow-600": task.priority === "Medium",
                        "bg-green-600": task.priority === "Low",
                    })}>
                       
                    </div>
                        
                  
                   <h1 className=" px-8">{title}</h1>
                </div>
               

                <div>
                     <div className="flex gap-3 items-center">
                        <Button variant="link"><BiTrash className="text-red-600"></BiTrash></Button>
                       <CiSquareCheck  className="text-green-600"/>
                    </div>
                </div>
                 
            </div>
            <p className="mt-5">{description}</p>
        </div>
    );
};

export default Taskcard;