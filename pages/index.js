import {useState} from "react";
import { Button, Card, Heading, Page, Stack, TextField } from "@shopify/polaris";

const Index = () => {
  const [appendTitle, setAppendToTitle] = useState('');
  const [appendToDescription, setAppendToDescription] = useState('');
  const [appendPrice, setAppendPrice] = useState('');
  const [pickerOpen, setPickerOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [showToast, setShowToast] = useState(false);

  return (
    <Page>
      <Heading>Product Updater App</Heading>
      <Card>
        <Card.Section>
          <Stack vertical>
            <TextField
              label="Append to title"
              value="{appendToTitle}"
              onChange={setAppendToTitle}
            />
            <TextField
              label="Append to desciption"
              value="{appendToDescription}"
              onChange={setAppendToDescription}
              multiline={3}
            />
            <TextField
              label="Append to price"
              value="{appendPrice}"
              onChange={setAppendPrice}
            />
          </Stack>
        </Card.Section>
      </Card>
    </Page>
  );


};

export default Index;
