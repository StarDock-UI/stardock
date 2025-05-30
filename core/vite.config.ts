import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [
		react(),
	],
	build: {
		lib: {
			entry: 'src/index.ts',
			name: 'phoenix-ui-mndr',
			fileName: (format) => `phoenix-ui-mndr.${format}.js`,
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
		},
	},
});
