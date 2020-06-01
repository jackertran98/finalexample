import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


function Statecheck({ accout }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://5ece19ec7c528e00167cdacf.mockapi.io/accout',
            );
            setData(result.data);
        };
        fetchData();
    }, []);
    return (
        <div>
            {data.map((value, key) => {
                if (value.name === accout.user && value.pass === accout.pass) {
                    return <Redirect to="/home" />
                }
            })}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        accout: state.Valueacc
    }
}

export default connect(mapStateToProps, null)(Statecheck)