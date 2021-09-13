import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Repeat } from "typescript-tuple"

type ZoneState = number

type ZoneProps = {
    value: ZoneState
    onClickL: () => void
    onClickR: () => void
}

type FieldState = Repeat<ZoneState,24>

type FieldProps = {
    zones: FieldState
    onClickL: (i: number) => void
    onClickR: (i: number) => void
}

type FieldInfo = {
    field: FieldState
    total: number
}

const Zone = (props: ZoneProps): JSX.Element => {
    return (
        <div>
            <div>
                <button className="zone">
                    {props.value}
                </button>
            </div>
            <div>
                <button onClick={()=>props.onClickL()} >
                    {"+"}
                </button>
                <button onClick={()=>props.onClickR()} >
                    {"-"}
                </button>
            </div>
        </div>
    );
} 

const Field = (props: FieldProps): JSX.Element => {
    const renderZone = (i: number) => {
        return (
            <Zone 
                value={props.zones[i]} 
                onClickL={()=>props.onClickL(i)} 
                onClickR={()=>props.onClickR(i)}
            />
        );
    }

    return (
        <div>
            <div className="field-spelltrap">
                {renderZone(0)}
                {renderZone(1)}
                {renderZone(2)}
                {renderZone(3)}
                {renderZone(4)}
            </div>
            <div className="field-monster-top">
                {renderZone(5)}
                {renderZone(6)}
                {renderZone(7)}
                {renderZone(8)}
                {renderZone(9)}
                {renderZone(10)}
            </div>
            <div className="field-ex">
                {renderZone(11)}
                <a></a>
                {renderZone(12)}
            </div>
            <div className="field-monster-bottom">
                {renderZone(13)}
                {renderZone(14)}
                {renderZone(15)}
                {renderZone(16)}
                {renderZone(17)}
                {renderZone(18)}
            </div>
            <div className="field-spelltrap">
                {renderZone(19)}
                {renderZone(20)}
                {renderZone(21)}
                {renderZone(22)}
                {renderZone(23)}
            </div>
        </div>
    )
}

const App = (): JSX.Element => {
    const [field, setField] = useState<FieldInfo>({
        field: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        total: 0,
    })

    const current = field
    const totalStr = "total:" + current.total

    const handleClickL = (i: number) => {
        const next: FieldInfo = (({field, total}) => {
            const nextField = field
            nextField[i]++
            return {
                field: nextField,
                total: total+1,
            }
        })(current)

        setField(next)
    }

    const handleClickR = (i: number) => {
        const next: FieldInfo = (({field, total}) => {
            const nextField = field
            let nextTotal = total
            
            if(nextField[i]>0){
                nextField[i]-=1
                nextTotal-=1
            }

            return {
                field: nextField,
                total: nextTotal,
            }
        })(current)

        setField(next)
    }

    const handleReset = () => {
        const resetField: FieldInfo = {
            field: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            total: 0,
        }

        setField(resetField)
    }

    const renderReset = () => {
        const desc = `Reset`
        return (
            <button onClick={handleReset}>
                {desc}
            </button>
        )
    }

    return (
        <div className="app">
            <div className="app-field">
                <Field 
                    zones={current.field} 
                    onClickL={handleClickL} 
                    onClickR={handleClickR} 
                />
            </div>
            <div className="app-button">
                <div className="text">{totalStr}</div>
                {renderReset()}
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));