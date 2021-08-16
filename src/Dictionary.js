import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";


export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response){
        setResults(response.data[0]);
    }

    function handlePhotosResponse(response){
        setPhotos(response.data.photos);
    }

    function search(){
        //Documentation: https://dictionaryapi.dev/
        let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey=`563492ad6f9170000100000147ea781985b948f4b99ee97577c6d470`;
        let header={ Authorization: `Bearer ${pexelsApiKey}`};
        let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

        axios.get(pexelsApiUrl, {headers: header}).then(handlePhotosResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function load(){
        setLoaded(true);
        search();
    }
    if (loaded){
        return(
        <div className="Dictionary">
            <section>
                <form onSubmit={handleSubmit}>
                    <input type="search" onChange={handleKeywordChange} placeholder="search for a word" ></input>
                </form>
                <small className="hint">i.e. forest, aurora, cascade, coding</small>
            </section>
            <Results results={results}/>
            <Photos photos={photos}/>
        </div>
        );
    }else{
        load();
        return "...loading"
    }
}