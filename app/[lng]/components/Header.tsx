type Props = {
	heading: string
};

export const Header = ({heading}: Props) => (
	<>
		<h2>
			Next.js 13 <small>(app directory)</small> - i18next
			<hr />
		</h2>
		<h1>{heading}</h1>
	</>
);