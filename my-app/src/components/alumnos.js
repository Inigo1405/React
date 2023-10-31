import React from "react";
import { Alumno } from "./alumno";

export const Alumnos = ({alumnos}) => {
    return (
        <ul>
            {alumnos.map((alumno, index) => {
                return <Alumno name={alumno} key={index}/>
            })}
        </ul>
    )
}