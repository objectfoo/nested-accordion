import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Box from "@material-ui/core/Box";
import Icon from "@material-ui/core/Icon";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export const NestedAccordion: React.FC = () => {
	return (
		<Box maxWidth={800} px={2} py={4} style={{ backgroundColor: "#fafafa" }}>
			<Date label="Thursday March 14" />
			<Date label="Friday March 18" />
			<Date label="Friday May 3" />
			<Date label="Tuesday Nov 7" />
		</Box>
	);
};

const Date: React.FC<{
	label: string;
}> = (props) => {
	return (
		<Program Summary={<>{props.label}</>}>
			<Program Summary={<>Program monkey bomb</>}>
				<List dense>
					<HistoryItem />
					<HistoryItem />
					<HistoryItem />
				</List>
			</Program>
			<Program Summary={<>Program apple shoes</>}>
				<List dense>
					<HistoryItem />
				</List>
			</Program>
			<Program Summary={<>Program spritely toothbrush</>}>
				<List dense>
					<HistoryItem />
					<HistoryItem />
				</List>
			</Program>
			<Program Summary={<>Program flaccid dumptruck</>}>
				<List dense>
					<HistoryItem />
					<HistoryItem />
				</List>
			</Program>
		</Program>
	);
};


const Program: React.FC<{
	Summary: JSX.Element;
}> = (props) => {
	const classes = useStyles();

	return (
		<Accordion classes={{ root: classes.accordionRoot }}>
			<AccordionSummary classes={{ root: classes.summaryRoot, content: classes.summaryContent }} expandIcon={<Icon>expand_more</Icon>}>
				{props.Summary}
			</AccordionSummary>
			<AccordionDetails classes={{ root: classes.detailsRoot }}>
				{props.children}
			</AccordionDetails>
		</Accordion>
	);
};

const useStyles = makeStyles((theme) => createStyles({
	accordionRoot: {
		"& &": {
			flexGrow: 1,
		},
		"&.Mui-expanded": {
			margin: theme.spacing(1, 0),
		},
	},
	summaryRoot: {
		"&.Mui-expanded": {
			minHeight: "unset",
		},
	},
	summaryContent: {
		"&.Mui-expanded": {
			margin: "12px 0",
		},
	},
	detailsRoot: {
		flexDirection: "column",
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(2),
		"& &": {
			backgroundColor: theme.palette.background.paper,
		},
	},
}));

const HistoryItem: React.FC = () => {
	return (
		<ListItem divider>
			<ListItemIcon>
				<Icon>star_rating</Icon>
			</ListItemIcon>
			<ListItemText primary="You did something" />
		</ListItem>
	);
};

