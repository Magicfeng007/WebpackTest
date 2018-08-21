import {sqrt,bar} from "./math";
import data from "../data/data";
import "../css/test.css";


document.write("webpack test" + '<br/>');
document.write("webpack test sqrt " + sqrt(6) + '<br/>');
document.write("webpack test" + bar(3) + '<br/>');
document.write("webpack test" + JSON.stringify(data) + '<br/>');
