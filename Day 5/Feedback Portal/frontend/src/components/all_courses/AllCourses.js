import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CourseCard from './CourseCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

function AllCourses() {

    const [courseList, setCourseList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/courseList").then((res) => {
            console.log(res.data);
            setCourseList(res.data);
        });
    });

    return (
        <>
            <Container>
                <Row>

                    {courseList && courseList.map((course) => (
                        <Col>
                            <CourseCard
                                key={course._id}
                                id={course._id}
                                courseImg={course.courseImg}
                                title={course.title}
                                price={course.price}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default AllCourses;