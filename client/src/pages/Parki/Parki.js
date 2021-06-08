import React, {useState, useEffect} from 'react';
// Router
import { useParams } from 'react-router-dom';
// GraphQL
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_PARKING } from "../../gql/parking";
//SemanticUi
import {Dimmer, Loader} from 'semantic-ui-react'

import ParkiDetail from '../../components/Parki/ParkiDetail'
import Footer from '../../components/Footer'

import './Parki.scss';

const Parki = () => {
    const params = useParams();

    const [id, setId] = useState(null);
    const [parki, setParki] = useState(null)
    const { data, loading } = useQuery(GET_PARKING, {
      variables: { id },
    });

    useEffect(() => {
        setId(params.idParki)
    }, [])
  
    useEffect(() => {
      if (data) {
        console.log(data)
        setParki(data.getParking)
      } else {
        // setResults([]);
      }
    }, [data]);

    return (
        <div className="Parki">
            {loading ? (
				<Dimmer active inverted>
					<Loader inverted>Loading</Loader>
				</Dimmer>
				) : (
					<>
						<ParkiDetail parki={parki}/>
					</>
					)
            }
            <Footer/>
        </div>
    )
}

export default Parki;
