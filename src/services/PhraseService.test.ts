import MockAdapter from 'axios-mock-adapter';
import {API_URL} from "../infrastructure/configuration";
import {httpClient, phraseService} from "../infrastructure/Factory";
import * as randomPhrasesResponse from "../tests/fixtures/services/RandomPhrasesResponse.json";
import randomPhrases from "../tests/fixtures/randomPhrases";

const axiosMocked = new MockAdapter(httpClient);

describe('Phrase service', () => {
    it('gets random phrases', async () => {
        const numberOfPhrases = 5;
        axiosMocked.onGet(`${API_URL}/jokes/random/${numberOfPhrases}`).reply(200, randomPhrasesResponse);

        const phrases = await phraseService.getRandomPhrases(numberOfPhrases);

        expect(phrases).toEqual(randomPhrases);
    });
});