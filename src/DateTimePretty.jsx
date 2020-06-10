import React from "react";
import moment from 'moment'

//реализация через функцию

export function DateTimePrettyFunc(Component) {
    return function (props) {
        const newDate = {...props, date: moment(props.date).toNow()}
        return <Component {...newDate}/>;
    };
}

//реализация через класс

export function DateTimePrettyClass(Component) {
    return class extends React.Component {
        newDate = {...this.props, date: moment(this.props.date).toNow()}
        render() {
            return <Component {...this.newDate} />
        }
    }
}
