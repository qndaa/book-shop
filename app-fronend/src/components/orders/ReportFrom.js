import React, {useRef, useState} from "react";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";
import {CSVDownload} from "react-csv";
import {CSVLink} from "react-csv";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";

const ReportFrom = () => {

    const {register, handleSubmit, getValues, setValue, formState: {errors}} = useForm();
    const orders = useSelector(state => state.orders);
    const csvLink = useRef();
    const [csvData, setCsvData] = useState([]);

    const submit = (data) => {
        let arr = [];
        Object.values(orders).map(order => {
            if (data.startDate < order.dateOfCreation && order.dateOfCreation < data.endDate) {
                return order.orderLines.map(orderLine => {
                    arr.push( {
                        orderId: order.orderId,
                        status: order.status,
                        totalMoney: order.totalMoney,
                        date: order.dateOfCreation,
                        book: orderLine.book.title,
                        quantity: orderLine.quantity,
                        price: orderLine.price,
                        customer: order.customer.firstName + ' ' + order.customer.lastName
                    });
                })
            }
        });
        setCsvData(arr);
        csvLink.current.link.click();

    }






    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(submit)}>
                <div className={`col-7`}/>
                <input className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm ml-3 mr-3"
                       type={`date`}
                       {...register('startDate', {
                           required: 'Start date is required!'})}


                />
                <div hidden={true}>
                    { (errors.startDate) && toast.error(errors.startDate.message)}
                </div>


                <input className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm ml-3 mr-3"
                       type={`date`}
                       {...register('endDate', {
                           required: 'End date is required!'})}
                />
                <div hidden={true}>
                    { (errors.endDate) && toast.error(errors.endDate.message)}
                </div>
                <button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm ml-3 mr-3"><i
                    className="fas fa-download fa-sm text-white-50" type={`submit`}/> Generate Report</button>
                <CSVLink  ref={csvLink} data={csvData} filename={`report.csv`} className="btn btn-primary" hidden={true}>
                    <FontAwesomeIcon icon={faDownload}/>
                </CSVLink>


            </form>


        </React.Fragment>

    );


}

export default ReportFrom;
