import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const mediaDir = path.join(process.cwd(), 'src', 'media');
const cacheDir = path.join(mediaDir, 'cache');

if (!fs.existsSync(mediaDir)) {
	console.log('No media images available');
} else {
	if (!fs.existsSync(cacheDir)) {
		fs.mkdirSync(cacheDir);
	}

	const files = fs.readdirSync(mediaDir, { withFileTypes: true });
	const thumbnails = files
		.filter((file) => file.isDirectory())
		.flatMap((dir) =>
			fs
				.readdirSync(path.join(mediaDir, dir.name), { withFileTypes: true })
				.filter(
					(file) =>
						/\.(jpe?g|png|gif|pdf|svg)$/i.test(file.name) && !/\.webp$|\.avif$/i.test(file.name)
				)
				.map((file) => {
					const thumbnailPath = path.join(cacheDir, dir.name, `${file.name}.webp`);
					try {
						const stats = fs.statSync(thumbnailPath);
						if (stats.mtime < fs.statSync(path.join(mediaDir, dir.name, file.name)).mtime) {
							throw new Error('File has been updated');
						}
					} catch (e) {
						if (/\.pdf$/i.test(file.name)) {
							sharp(path.join(mediaDir, dir.name, file.name))
								.resize(100)
								.flatten({ background: { r: 255, g: 255, b: 255 } })
								.jpeg()
								.toFile(thumbnailPath);
						} else {
							sharp(path.join(mediaDir, dir.name, file.name))
								.resize(100)
								.webp()
								.toFile(thumbnailPath);
						}
					}
					return {
						path: thumbnailPath.replace(/\.webp$/, '.jpg'),
						name: file.name,
						folder: dir.name,
						date: fs.statSync(path.join(mediaDir, dir.name, file.name)).mtime
					};
				})
		);
}
export { thumbnails };
