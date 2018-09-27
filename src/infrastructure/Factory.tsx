import PhraseService from "../services/PhraseService";
import axios, {AxiosInstance} from "axios";

export const httpClient: AxiosInstance = axios.create()

export const phraseService : PhraseService = new PhraseService(httpClient)