import { List, Datagrid, TextField, SimpleShowLayout, Show, RichTextField, Edit, SimpleForm, TextInput, required, Create } from 'react-admin';

export const JuiceList = () => (
    <List>
        <Datagrid
            bulkActionButtons={false}
        >
            <TextField source="brand_code" />
            <TextField source="brand" />
        </Datagrid>
    </List>
);

export const JuiceShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="brand_code" />
            <TextField source="brand" />
            <RichTextField source="description" />
        </SimpleShowLayout>
    </Show>
);

export const JuiceEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="brand_code" validate={required()} />
            <TextInput source="brand" validate={required()} />
            <TextInput multiline source="description" validate={required()} />
        </SimpleForm>
    </Edit>
);

export const JuiceCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="brand_code" validate={[required()]} label="Brand Code" />
            <TextInput source="brand" multiline={true} label="Brand" />
            <TextInput source="description" label="Description" />
        </SimpleForm>
    </Create>
);
