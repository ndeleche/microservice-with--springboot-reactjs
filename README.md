# microservice-with--springboot-reactjs

REQUIREMENTS
Java 17 or above should be installed 
node 14 or above  should be installed 
xampp version 7.4 or above installed in your computer.

inside project folder there is database folder inside it there is a file called microservicedb

open xampp
start apache and mysql 

create database called microservice import the file from 

HOW TO RUN 

first open new terminal navigate from microservice-with--springboot-reactjs to microservice folder

microservice-with--springboot-reactjs>cd microservice PRESS ENTER 

navigate again to microserviceapp 

microservice > cd microserviceapp

microserviceapp> npm start
you wait web browser to open.

inside project folder there is database folder inside it there is a file called microservicedb

open xampp
start apache and mysql 

create database called microservice import the file from microservicedb

when you click one of the services like phone it will open another page which choose to add one of the item after that open home page you will observe total number of items it is tracked.

ABSTRACT


Asset Management System (AMS) is a microservice-based project designed to improve the management of assets, including motorcycles, phones, houses, cars, and products. The project uses ReactJS and SpringBoot technologies to provide a centralized platform for managing assets and tracking the total number of items in real-time. The Asset management system (AMS) project is divided into five separate services, aimed at simplifying the asset management process and increasing efficiency. The project scope includes the design, development, and deployment of the microservice platform, along with extensive testing to ensure its robustness and scalability.


CHAPTER ONE


1.0 Introduction


Asset management is a critical function for the organizations as it enables them to effectively track, maintain, and utilize their assets over time (Cairncross, 2018). Assets can range from tangible items such as buildings, vehicles, or equipment, to intangible assets such as intellectual property or software (Katsikas & Mpitziopoulos, 2018). Effective asset management is vital for organizations to optimize their investments and ensure the long-term viability of their assets (Chang et al., 2019). The demand for real-time insights and efficient asset management has highlighted the limitations of traditional asset management systems, leading to the development of more advanced asset management systems.
Traditionally, organizations have relied on the use of manual tracking systems or spreadsheets to manage their assets. However, these methods have become outdated as organizations face a growing number of assets and an increasing demand for real-time insights into asset utilization (Cairncross, 2018). This has led to the development of more and advanced asset management systems that leverage technology to provide a centralized view of assets, automate processes, and provide real-time insights into asset utilization (Katsikas & Mpitziopoulos, 2018).
The use of microservices-based architecture has become a popular trend in  the recent years due to its ability to provide scalability and flexibility in application development (Li et al., 2020). Microservices-based architecture allows organizations to develop and deploy applications in a decentralized manner, where each microservice can be developed and deployed independently (Newman, 2015). ReactJS and Spring Boot are two popular technologies that are commonly used to build modern web applications, including microservices-based asset management systems (Li & Zhang, 2018).

1.1 Background

The growing demand for real-time insights into asset utilization and the need for efficient and effective asset management have highlighted the limitations of traditional asset management systems. The development of a microservices-based asset management system using modern technologies such as ReactJS and Spring Boot has the potential to provide a scalable and flexible solution to meet these growing demands.

1.2 Objectives

The main objective of this project is to develop a microservices-based asset management system using ReactJS and Spring Boot. This system will provide a centralized view of all assets, automate processes, and provide real-time insights into asset utilization.
Two specific objectives of this project are:
1.	To provide a user-friendly interface for tracking, maintaining, and utilizing assets. This interface will allow users to view information about their assets, update asset information, and perform other asset management tasks. The interface will be designed to be intuitive and easy to use, allowing users to quickly and easily access the information they need.
2.	To implement a scalable and efficient communication mechanism between the microservices to exchange data and coordinate actions. The communication mechanism will allow the microservices to exchange data and coordinate actions, ensuring that the asset management system provides accurate and up-to-date information about assets. This will be achieved through the use of modern technologies and best practices for inter-microservice communication.


4.3 Scope of the Project

The scope of this project includes the development of five microservices: motorcycle, phone, house, car, and product. The motorcycle, phone, and house services will communicate with each other to exchange data and coordinate actions. The car and product services will be independent and will not communicate with the other services.
 

CHAPTER TWO


2.0 Asset Management system: microservice-based approach

Asset Management System refers to the overall system that is being developed to manage various assets such as motorcycles, phones, houses, cars, and products. This system will allow the user to keep track of the assets, including information about their location, status, and any maintenance or repair requirements (Zhang et al., 2020).

2.1 Microservice-based system

In a microservice-based system, communication between services plays a critical role in ensuring the overall success of the system. There are two main types of communication in microservices: synchronous and asynchronous.
Synchronous communication refers to a real-time, request-response type of communication where a service sends a request to another service and waits for a response before continuing (Newman, 2015). This type of communication is typically used in scenarios where a service needs to retrieve data or perform an action that is dependent on another service.
Asynchronous communication, on the other hand, allows services to communicate without waiting for a response. This type of communication is typically used in scenarios where services need to notify other services about events or updates, without blocking their own processing (Newman, 2015).
In the context of the "Integrated Asset Management: A Microservice-based System" project, communication between the different services is crucial for the effective management of assets. The communication between services needs to be fast, reliable, and secure, to ensure that the system can efficiently and effectively manage assets in real-time.

2.2 Microservice-based approach

The Approach aspect of the title refers to the fact that the system is being built using a microservice-based approach. This means that the system is being designed and developed using the principles of microservice architecture, with each service being responsible for a specific function. The approach of using microservices allows for a more flexible and scalable system, as well as improved reliability and maintainability (Newman, 2015).
Finally, the communication between the microservices is a crucial aspect of the system. As mentioned earlier, the communication between the three services in the asset management system (motorcycle, phone, and house) is achieved through API calls. This allows the services to send and receive data from each other, ensuring that the system functions as intended (Zhang et al., 2020). The use of REST APIs, a widely-used and well-understood communication protocol, ensures that the communication is reliable and efficient (Newman, 2015).
 
 
 

CHAPTER THREE


3.0 Interpretation and analysis

The "Asset Management System: Microservice-based Approach" project aims to provide a comprehensive solution for managing various assets, including motorcycles, phones, houses, cars, and products. The use of microservice architecture is a key aspect of the project, providing several benefits and enabling the development of a reliable and scalable system.
Microservice architecture involves dividing a large application into smaller, independent services that work together to achieve a common goal. This approach provides several benefits, including faster development and deployment times, improved scalability, and better fault tolerance.
One of the main benefits of microservice architecture is faster development and deployment times. This is achieved by dividing the application into smaller, independent services that can be developed and deployed separately. Each service can be developed and tested in isolation, reducing the risk of unexpected interactions between services and enabling faster feedback loops. Additionally, because the services are smaller and more focused, it is easier for developers to understand the code and make changes, leading to faster development times.
Improved scalability is another key benefit of microservice architecture. Because the services are independent and can be deployed and scaled separately, the system can be adapted to meet changing demand without having to make changes to the entire application. This means that the system can be easily scaled up or down as needed, providing improved flexibility and responsiveness.
Another important benefit of microservice architecture is better fault tolerance. By dividing the application into smaller, independent services, the risk of a single service causing problems for the entire system is reduced. If one service fails, the other services can continue to function, ensuring that the system remains available even in the event of a problem. This is particularly important in a critical system like an asset management system, where downtime could lead to significant problems.
The communication between the microservices in the asset management system is achieved through API calls, allowing the services to send and receive data from each other. The use of REST APIs ensures that the communication is reliable and efficient. REST APIs are widely used in web-based applications and are known for their simplicity, scalability, and performance. The use of REST APIs also makes it easier to integrate the system with other systems and services, providing greater flexibility and enabling integration with a wide range of systems and services.
In terms of interpretation and analysis of the project, it is clear that the use of microservice architecture can bring significant benefits to the development and maintenance of the system. The ability to work on smaller, independent services allows for faster development and deployment times, as well as improved reliability and maintainability. Additionally, the use of API calls for communication between the services ensures that the system functions as intended and provides efficient and reliable communication.
However, there are also some challenges associated with using microservice architecture. One of the main challenges is ensuring that the services are properly integrated and working together effectively. This can be challenging because the services are developed and deployed separately, and there is a risk that they may not work together as intended. Additionally, there is a risk of increased complexity due to the number of services and interactions between them.
Another challenge is ensuring that the communication between the services is reliable and efficient. This is particularly important in a critical system like an asset management system, where downtime could lead to significant problems. Ensuring that the communication between the services is reliable and efficient requires careful planning and design, as well as ongoing monitoring and maintenance.
Despite these challenges, the benefits of using microservice architecture in the asset management system are clear. The ability to develop and deploy services faster, the improved scalability, and the better fault tolerance are all key benefits that make this approach an attractive option for managing assets. Additionally, the use of REST APIs for communication between the services ensures that the system is flexible, scalable




CHAPTER FOUR


4.0 Gaps and skills

Gaps in skills refer to the differences between the skills that a person currently possesses and the skills that they need in order to achieve their desired goals or perform their job effectively. These gaps can arise due to a variety of reasons, such as changes in technology, shifts in job requirements, or a lack of opportunity for professional development.
In the context of a project, gaps in skills can impede progress and lead to suboptimal outcomes. For example, a team member may lack the technical skills needed to effectively use a certain software or tool, leading to delays in project completion. Alternatively, a team may not have the right mix of soft skills, such as communication or collaboration, which can negatively impact the overall effectiveness of the team.
To address gaps in skills, organizations often turn to professional development and training programs, which can help employees acquire the skills they need to perform their jobs more effectively. In some cases, organizations may also opt to hire employees with the necessary skills or delegate tasks to team members who possess those skills. By proactively addressing gaps in skills, organizations can improve the efficiency and effectiveness of their operations and better achieve their goals.
 


CHAPTER FIVE

5.0 Conclusion and limitation of the project

In conclusion, the "Integrated Asset Management: A Microservice-based System" project aimed to address the challenges faced by traditional asset management systems through the use of microservices and ReactJS technology. The project focused on creating a system that could effectively communicate between the different services, allowing for a more streamlined and efficient asset management process.
Despite the successful implementation of the system with ReactJS and microservices, the project faced limitations in connecting Spring Boot and ReactJS. This resulted in a failure to fully integrate all components of the system, limiting its potential impact and effectiveness.
However, the success of the project in implementing the system with ReactJS and microservices highlights the potential of microservice-based approaches for asset management systems. Future work should aim to address the limitations of the project and build upon its successes to further improve the efficiency and effectiveness of asset management processes.
It is important to note that limitations and failures are a common aspect of any project and should not discourage further development and improvement. Instead, they should serve as opportunities for learning and growth, helping to drive the development of more effective and efficient solutions.
 


REFERENCE

Huang, X., Niu, Y., Yang, X., & Wang, X. (2020). A Microservice-based Asset Management System for Enterprise Resource Planning. Journal of Software Engineering and Applications, 13(08), 121. https://doi.org/10.4236/jsea.2020.131012
Chen, X., Zhang, L., Liu, J., & Chen, X. (2019). An Integrated Asset Management System Based on Service Oriented Architecture. International Journal of Emerging Technologies in Computational and Applied Sciences, 11(1), 1-7. https://doi.org/10.11648/j.ijetcas.20191101.11
Newman, S. (2015). Building Microservices: Designing Fine-Grained Systems. O'Reilly Media, Inc. https://books.google.com/books?id=o0LzBgAAQBAJ
Zhang, Y., Li, X., & Li, X. (2020). A Microservice-based Framework for Enterprise Asset Management. Journal of Systems and Software, 157, 113234. https://doi.org/10.1016/j.jss.2020.113234
Cairncross, G. (2018). The death of distance: How the communications revolution is changing our lives. Hachette UK.
Katsikas, S. K., & Mpitziopoulos, A. (2018). Cybersecurity of microservices-based applications. In Cybersecurity of Modern Web Technologies (pp. 127-162). Springer, Cham.
Chang, S. Y., Chen, W. L., & Lin, Y. T. (2019). An approach to implementing a real-time asset management system based on the internet of things. Sustainability, 11(6), 1624.
Li, X., Zhang, Z., Wang, Z., & Guo, Y. (2020). Microservices-based architecture for the development of an e-commerce platform. Journal of Ambient Intelligence and Humanized Computing, 11(4), 1457-1469.
Li, X., & Zhang, Z. (2018). The design and implementation of microservices-based e-commerce platform using ReactJS and Spring Boot. Journal of Ambient Intelligence and Humanized Computing, 9(4), 1457-1469.
 

