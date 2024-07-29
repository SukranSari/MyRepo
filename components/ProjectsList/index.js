import ProjectCard from "@/components/ProjectCard";
import styled from "styled-components";
import Link from "next/link";

export default function ProjectsList({ projects }) {
  return (
    <StyledUl>
      {projects.map((project) => (
        <StyledListElement key={project.id}>
          <StyledLink href={`/projects/${project.id}`}>
            <ProjectCard project={project} />
          </StyledLink>
        </StyledListElement>
      ))}
    </StyledUl>
  );
}

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  padding: 2rem;
  margin: 0;
`;

const StyledListElement = styled.li`
  list-style-type: none;
  padding: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
