import {API_URL} from "../../../infrastructure/configuration";
import {httpClient} from "../../../infrastructure/Factory";
import * as randomPhrasesResponse from "../../fixtures/services/RandomPhrasesResponse.json"

describe('Phrase service', () => {
    it('GET random Phrases', async () => {
        const numberOfPhrases = 5;
        const url = `${API_URL}/jokes/random/${numberOfPhrases}`;
        const response = await httpClient.get(url);

        expect(response.data).toEqual(randomPhrasesResponse);
    });
});