import {AxiosInstance, AxiosResponse} from "axios";
import {API_URL} from "../infrastructure/configuration";
import Phrase from "../domain/Phrase";

interface RandomPhrasesResponse {
    type: string,
    value: Array<{
        id: Number,
        joke: string
    }>
}

function parse(response: RandomPhrasesResponse): Array<Phrase> {
    return response.value.map(phrase => ({id: phrase.id.toString(), text: phrase.joke}));
}

export default class PhraseService {
    private httpClient: AxiosInstance;

    constructor(httpClient: AxiosInstance) {
        this.httpClient = httpClient;
    }

    async getRandomPhrases(numberOfPhrases: Number): Promise<Array<Phrase>> {
        const url = `${API_URL}/jokes/random/${numberOfPhrases}`;
        const response: AxiosResponse<RandomPhrasesResponse> = await this.httpClient.get(url);
        return parse(response.data);
    }
}
