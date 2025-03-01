import styled from "styled-components";

type FormProps = {
    formData: { gridWidth: number };
    setFormData: (data: { gridWidth: number }) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function Form({ formData, setFormData, handleSubmit }: FormProps) {
    return (
        <StyledForm onSubmit={handleSubmit}>
            <label htmlFor="gridWidth">Grid width:</label>
            <StyledInput 
                type="number" 
                id="gridWidth" 
                name="gridWidth" 
                min="3" 
                max="10"
                value={formData.gridWidth} // Controlled component
                onChange={(e) => setFormData({ gridWidth: Number(e.target.value) })}
            />
            <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
    );
}

const StyledForm = styled.form`
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
`;

const StyledInput = styled.input`
    margin: 10px auto;
    padding: 5px 10px;
    border-radius: 5px;
`;

const StyledButton = styled.button`
    margin: 10px auto;
    padding: 5px 10px;
    border-radius: 5px;
`;