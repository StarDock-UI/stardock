import Button from './lib/components/Button.tsx';

const App = () => {
	return (
		<div className='flex'>

			<div className=''>
			<Button label='Click Me' variant='primary'/>
			<Button label='Click Me' variant='secondary'/>
			<Button label='Click Me' variant='outline'/>
			<Button label='Click Me' variant='link'/>
			<Button label='Click Me' variant='ghost'/>
			</div>

		</div>
	);
};

export default App;
