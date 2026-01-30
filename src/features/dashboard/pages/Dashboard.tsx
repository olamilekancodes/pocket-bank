import { Typography } from "../../../shared/components/ui/Typography";

export const DashboardPage = () => {
  return (
    <div>
      <h1>This is a dashboard page</h1>;
      <Typography variant="h1">This is H1</Typography>
      <Typography variant="h2">This is H2</Typography>
      <Typography variant="h3">This is H3</Typography>
      <Typography variant="h4">This is H4</Typography>
      <Typography variant="h5">This is H5</Typography>
      <Typography variant="h6">This is H6</Typography>
      <Typography variant="p">
        This is paragraph text. It is responsive and scales smoothly between
        different screen sizes.
      </Typography>
    </div>
  );
};
