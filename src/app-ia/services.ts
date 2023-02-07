import { API_KEY_COHERE } from '@/utils';
const COHERE_API_GENERATE_URL = 'https://api.cohere.ai/generate';

export const searchMovies = async (keywords: string[]): Promise<string> => {
	const prompt = `Question: 
		Give me a list of movies or series by theses keywords: ${keywords.join(', ')}
	`;
	const data = {
		frequency_penalty: 0,
		k: 0,
		max_tokens: 300,
		model: 'command-xlarge-nightly',
		p: 0.75,
		presence_penalty: 0,
		prompt: `Give me a list of movies or series by theses keywords: ${keywords.join(
			', '
		)}`,
		return_likelihoods: 'NONE',
		stop_sequences: [],
		temperature: 0.9,
	};

	const response = await fetch(COHERE_API_GENERATE_URL, {
		method: 'POST',
		headers: {
			Authorization: `BEARER ${API_KEY_COHERE}`,
			'Content-Type': 'application/json',
			'Cohere-Version': '2022-12-06',
		},
		body: JSON.stringify(data),
	}).then(res => res.json());

	return response.generations[0].text;
};
