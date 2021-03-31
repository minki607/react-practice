import { Form } from "semantic-ui-react";

const FormInput = ({ onContentSubmit, content, setContent }) => {
  return (
    <Form onSubmit={onContentSubmit}>
      <Form.Field>
        <input onChange={(e) => setContent(e.target.value)} value={content} />
      </Form.Field>
    </Form>
  );
};
export default FormInput;
