import { API_URL } from '~/lib/constants';

export default function createSrcSets(imgNum: number) {
	return {
		avif: `${API_URL}/assets/model-horse-${imgNum}/model-horse-${imgNum}@480.avif 480w, ${API_URL}/assets/model-horse-${imgNum}/model-horse-${imgNum}@768.avif 768w, ${API_URL}/assets/model-horse-${imgNum}/model-horse-${imgNum}@1024.avif 1024w, ${API_URL}/assets/model-horse-${imgNum}/model-horse-${imgNum}@1280.avif 1280w, ${API_URL}/assets/model-horse-${imgNum}/model-horse-${imgNum}@1440.avif 1440w, ${API_URL}/assets/model-horse-${imgNum}/model-horse-${imgNum}@1920.avif 1920w`,
		jpeg: `${API_URL}/assets/model-horse-${imgNum}/model-horse-${imgNum}@480.jpeg 480w, ${API_URL}/assets/model-horse-${imgNum}/model-horse-${imgNum}@768.jpeg 768w, ${API_URL}/assets/model-horse-${imgNum}/model-horse-${imgNum}@1024.jpeg 1024w, ${API_URL}/assets/model-horse-${imgNum}/model-horse-${imgNum}@1280.jpeg 1280w, ${API_URL}/assets/model-horse-${imgNum}/model-horse-${imgNum}@1440.jpeg 1440w, ${API_URL}/assets/model-horse-${imgNum}/model-horse-${imgNum}@1920.jpeg 1920w`,
		webp: `${API_URL}/assets/model-horse-${imgNum}/model-horse-${imgNum}@480.webp 480w, ${API_URL}/assets/model-horse-${imgNum}/model-horse-${imgNum}@768.webp 768w, ${API_URL}/assets/model-horse-${imgNum}/model-horse-${imgNum}@1024.webp 1024w, ${API_URL}/assets/model-horse-${imgNum}/model-horse-${imgNum}@1280.webp 1280w, ${API_URL}/assets/model-horse-${imgNum}/model-horse-${imgNum}@1440.webp 1440w, ${API_URL}/assets/model-horse-${imgNum}/model-horse-${imgNum}@1920.webp 1920w`,
	};
}
