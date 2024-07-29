import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function ProjectDetailsPage({ projects }) {
  const router = useRouter();
  const { id } = router.query;

  const projectData = projects.find((project) => project.id === id);

  if (!projectData) {
    return <h1>No project found</h1>;
  }

  const {
    title,
    imageUrl,
    complexity,
    description,
    duration,
    materials,
    steps,
  } = projectData;

  return (
    <>
      <Link href="/">
        <FaArrowLeftLong /> Back
      </Link>

      <StyledDetailsWrapper>
        <h1>{title}</h1>
        <StyledImageWrapper>
          <Image src={imageUrl} alt={title} width={300} height={200} />
          <StyledComplexityTag>{complexity}</StyledComplexityTag>
        </StyledImageWrapper>
        <p>{description}</p>
        <StyledDuration>Duration: {duration}</StyledDuration>

        <h2>Materials</h2>
        <StyledMaterialsList>
          {materials.map((material, index) => (
            <StyledListItems key={index}>{material}</StyledListItems>
          ))}
        </StyledMaterialsList>

        <h2>Instructions</h2>
        <StyledInstructionsList>
          {steps.map((step) => (
            <StyledListItems key={step.id}>{step.description}</StyledListItems>
          ))}
        </StyledInstructionsList>
      </StyledDetailsWrapper>
    </>
  );
}

const StyledImageWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const StyledComplexityTag = styled.p`
  position: absolute;
  bottom: 0.6rem;
  right: 0.5rem;
  padding: 5px;
  margin: 0;
  background-color: white;
  border-radius: 10px;
`;

const StyledDetailsWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

const StyledDuration = styled.p`
  align-self: self-end;
`;

const StyledMaterialsList = styled.ul`
  align-self: flex-start;
  list-style-position: inside;
  padding: 0;
  margin: 0;
  margin-top: 1rem;
`;

const StyledInstructionsList = styled.ol`
  align-self: flex-start;
  list-style-position: inside;
  padding: 0;
  margin-top: 1rem;
  line-height: 1.5rem;
`;

const StyledListItems = styled.li`
  margin-bottom: 0.3rem;
`;
