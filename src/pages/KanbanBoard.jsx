import { Box, Flex, Heading, VStack, Button, Text, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialTasks = {
  todo: [
    { id: "1", title: "Task 1", description: "Description for Task 1" },
    { id: "2", title: "Task 2", description: "Description for Task 2" },
  ],
  inProgress: [],
  done: [],
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const columnWidth = useBreakpointValue({ base: "100%", md: "30%" });

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceColumn = tasks[source.droppableId];
    const destColumn = tasks[destination.droppableId];
    const [removed] = sourceColumn.splice(source.index, 1);
    destColumn.splice(destination.index, 0, removed);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceColumn,
      [destination.droppableId]: destColumn,
    });
  };

  const addTask = () => {
    const newTask = {
      id: (Math.random() * 1000).toString(),
      title: `Task ${tasks.todo.length + 1}`,
      description: `Description for Task ${tasks.todo.length + 1}`,
    };
    setTasks({
      ...tasks,
      todo: [...tasks.todo, newTask],
    });
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Kanban Board</Heading>
      <Button mb={4} onClick={addTask}>Add Task</Button>
      <DragDropContext onDragEnd={onDragEnd}>
        <Flex direction={{ base: "column", md: "row" }} justify="space-between">
          {["todo", "inProgress", "done"].map((column) => (
            <Droppable key={column} droppableId={column}>
              {(provided) => (
                <VStack
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  bg="gray.100"
                  p={4}
                  borderRadius="md"
                  w={columnWidth}
                  minH="400px"
                  mb={{ base: 4, md: 0 }}
                >
                  <Heading size="md" mb={4}>
                    {column === "todo" ? "To Do" : column === "inProgress" ? "In Progress" : "Done"}
                  </Heading>
                  {tasks[column].map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <Box
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          bg="white"
                          p={4}
                          mb={4}
                          borderRadius="md"
                          boxShadow="md"
                          w="100%"
                        >
                          <Heading size="sm">{task.title}</Heading>
                          <Text>{task.description}</Text>
                        </Box>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </VStack>
              )}
            </Droppable>
          ))}
        </Flex>
      </DragDropContext>
    </Box>
  );
};

export default KanbanBoard;