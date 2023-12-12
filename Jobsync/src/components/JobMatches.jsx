// JobMatches.jsx
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import axios from "axios";

const JobMatches = ({ answers }) => {
  const [jobMatches, setJobMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobMatches = async () => {
      try {
        setLoading(true);

        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint to fetch job matches
        const response = await axios.get("http://127.0.0.1:5000/calculate_similarity"); // Use the correct API endpoint

        // Assuming the API returns an array of job matches
        setJobMatches(response.data);
      } catch (error) {
        console.error("Error fetching job matches:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobMatches();
  }, [answers]); // The empty dependency array ensures that this effect runs once on component mount

  // const jobMatches = [
  //   {
  //     _id: {
  //       $oid: "6572d90118ed07e586a8286a",
  //     },
  //     job_position: "ANALYST II BUSINESS",
  //     job_location: "Las Vegas, NV",
  //     company_name: "Boyd Gaming",
  //     company_linkedin_id:
  //       "https://www.linkedin.com/company/boyd-gaming?trk=public_jobs_topcard-org-name",
  //     job_posting_time: "4 weeks ago",
  //     job_description:
  //       "Position DescriptionJoin the Boyd Innovation Team as an Innovation BA II, where you'll be at the helm of driving strategic advancements and hands-on innovation. You will be instrumental in identifying and integrating emerging trends, enhancing our customer's digital experience, and contributing to the overall growth of Boyd Gaming. This role demands a creative maverick with an entrepreneurial mindset, someone who's adept at both strategic thinking and rolling up their sleeves to experiment with new ideas. If you're drawn to the world of casino games, esports, and are excited by the evolution of the gaming landscape, this is your platform to shine.Conduct insightful market research to steer innovation and technological integration.Play a key role in the product development life cycle, from conception to launch.Craft compelling business reports and deliver persuasive presentations.Serve as a liaison between vendors, Marketing, IT, Compliance, Finance, and General Management.Analyze data to inform decisions regarding our mobile and digital product strategies.Manage project timelines using tools like project and Excel, ensuring deadlines are met.Coordinate and facilitate meetings, promoting effective cross-departmental collaboration.Position RequirementsEntrepreneurial spirit with an appetite for challenging traditional processes.Exceptional business and creative writing skills.Strong analytical skills with a proven track record of insightful business analysis.An informed perspective on current tech and pop culture trends.Ability to manage and prioritize multiple projects without compromising quality.Passion for the gaming industry, with an emphasis on iGaming, esports, and skill-based games.Experience in business analytics, organizational strategies, and documentation.Proficiency in Microsoft Office Suite, project management software, and digital multimedia tools.Preparedness for occasional on-site visits to Boyd Gaming venues.Flexibility to attend industry tradeshows and conferences as needed.Bonus QualificationsGraphic Design Skills: Proficiency in Photoshop or other graphic design software. This skill is invaluable for visualizing concepts and contributing to the design aspects of our digital offerings.Familiarity with Interactive Gaming Platforms: A strong understanding of Daily Fantasy Sports as well as real money Sports Bet applications. Your knowledge in these areas will be instrumental in developing innovative gaming experiences.Experience in Virtual Environments: Hands-on play experience in virtual worlds such as Minecraft, Roblox, Decentraland, Sandbox, and Fortnite. Engaging in these environments provides unique insights that are crucial for driving innovation in our products.Personal Passion for Gaming: A love of gaming that extends beyond the workplace – gaming is not just your job, but a personal hobby and passion. This deep interest ensures our team stays connected to the gaming community and current trends.We are an Equal Opportunity Employer and do not discriminate against any employee or applicant for employment because of race, color, sex, age, national origin, religion, sexual orientation, gender identity, status as a veteran, and basis of disability or any other federal, state or local protected class.",
  //     Seniority_level: "Mid-Senior level",
  //     Employment_type: "Full-time",
  //     Job_function: "Research, Analyst, and Information Technology",
  //     Industries: "Gambling Facilities and Casinos",
  //     job_apply_link:
  //       "https://www.linkedin.com/jobs/view/externalApply/3761608109?url=https%3A%2F%2Fcareers%2Epeopleclick%2Ecom%2Fcareerscp%2Fclient_boydgaming%2Fexternal%2Fresults%2FjobDetails%2FjobDetail%2Ehtml%3FjobPostId%3D106155%26localeCode%3Den_US&urlHash=qWcs&trk=public_jobs_apply-link-offsite_sign-up-modal-sign-up-later",
  //   },
  //   {
  //     _id: {
  //       $oid: "6572d90318ed07e586a8286b",
  //     },
  //     job_position: "GIS Analyst",
  //     job_location: "Las Vegas, NV",
  //     company_name: "Fusion HCR",
  //     company_linkedin_id:
  //       "https://www.linkedin.com/company/fusion-hcr?trk=public_jobs_topcard-org-name",
  //     job_posting_time: "1 week ago",
  //     job_description:
  //       "FusionHCR is seeking multiple GIS Analysts for contract to permanent opportunities with our growing and stable client. The GIS Analyst is responsible for electronic mapping, drafting and facility information maintenance processes and maintains current knowledge of all our client's GIS applications including but not limited to: ESRI ArcGIS/ArcFM, AutoCAD, GPS software and hardware, engineering modeling applications, document management software, and company-specific manuals and procedures. This position evaluates workflow processes and initiates system efficiencies; creates and executes advanced spatial data queries using geoprocessing tools, Python programming language and/or SQL queries; performs analyses to support data requests for State, DOT and operations integrity programs.Apply GIS theories, principles, software and data to produce complex maps, web applications and other spatial products to meet customer requirementsDevelop and execute custom spatial queries using geoprocessing tools, Python and SQL to perform advanced analysis that identify spatial data patterns and trendsProvide technical work guidance and lead the activities on the GISAssist other departments in analyzing GIS data, review relationships with other datasets and provide concise reportsMaintain active liaison with local personnel and project management, keeping stakeholders informed of projects progress, discussing GIS issues and action items, and making required presentationsConduct user training on the GIS system, AutoCAD, GPS software, Capture and PaperVision system as appropriateProvide technical assistance to Division AutoCAD usersProvide technical assistance to Division GPS usersProvide custom facility maps for internal and external entitiesTechnologies include: ESRI ArcGIS and ArcFM, AutoCad, various GPS technologies, Python, SQL",
  //     Seniority_level: "Entry level",
  //     Employment_type: "Contract",
  //     Job_function: "Information Technology",
  //     Industries: "Human Resources Services",
  //     job_apply_link:
  //       "https://www.linkedin.com/jobs/view/externalApply/3776556713?url=https%3A%2F%2Ffusionhcr%2Ecatsone%2Ecom%2Fcareers%2F43293-General%2Fjobs%2F16342541-GIS-Analyst&urlHash=sEhm&trk=public_jobs_apply-link-offsite_sign-up-modal-sign-up-later",
  //   },
  //   {
  //     _id: {
  //       $oid: "6572d90118ed07e586a8286a",
  //     },
  //     job_position: "ANALYST II BUSINESS",
  //     job_location: "Las Vegas, NV",
  //     company_name: "Boyd Gaming",
  //     company_linkedin_id:
  //       "https://www.linkedin.com/company/boyd-gaming?trk=public_jobs_topcard-org-name",
  //     job_posting_time: "4 weeks ago",
  //     job_description:
  //       "Position DescriptionJoin the Boyd Innovation Team as an Innovation BA II, where you'll be at the helm of driving strategic advancements and hands-on innovation. You will be instrumental in identifying and integrating emerging trends, enhancing our customer's digital experience, and contributing to the overall growth of Boyd Gaming. This role demands a creative maverick with an entrepreneurial mindset, someone who's adept at both strategic thinking and rolling up their sleeves to experiment with new ideas. If you're drawn to the world of casino games, esports, and are excited by the evolution of the gaming landscape, this is your platform to shine.Conduct insightful market research to steer innovation and technological integration.Play a key role in the product development life cycle, from conception to launch.Craft compelling business reports and deliver persuasive presentations.Serve as a liaison between vendors, Marketing, IT, Compliance, Finance, and General Management.Analyze data to inform decisions regarding our mobile and digital product strategies.Manage project timelines using tools like project and Excel, ensuring deadlines are met.Coordinate and facilitate meetings, promoting effective cross-departmental collaboration.Position RequirementsEntrepreneurial spirit with an appetite for challenging traditional processes.Exceptional business and creative writing skills.Strong analytical skills with a proven track record of insightful business analysis.An informed perspective on current tech and pop culture trends.Ability to manage and prioritize multiple projects without compromising quality.Passion for the gaming industry, with an emphasis on iGaming, esports, and skill-based games.Experience in business analytics, organizational strategies, and documentation.Proficiency in Microsoft Office Suite, project management software, and digital multimedia tools.Preparedness for occasional on-site visits to Boyd Gaming venues.Flexibility to attend industry tradeshows and conferences as needed.Bonus QualificationsGraphic Design Skills: Proficiency in Photoshop or other graphic design software. This skill is invaluable for visualizing concepts and contributing to the design aspects of our digital offerings.Familiarity with Interactive Gaming Platforms: A strong understanding of Daily Fantasy Sports as well as real money Sports Bet applications. Your knowledge in these areas will be instrumental in developing innovative gaming experiences.Experience in Virtual Environments: Hands-on play experience in virtual worlds such as Minecraft, Roblox, Decentraland, Sandbox, and Fortnite. Engaging in these environments provides unique insights that are crucial for driving innovation in our products.Personal Passion for Gaming: A love of gaming that extends beyond the workplace – gaming is not just your job, but a personal hobby and passion. This deep interest ensures our team stays connected to the gaming community and current trends.We are an Equal Opportunity Employer and do not discriminate against any employee or applicant for employment because of race, color, sex, age, national origin, religion, sexual orientation, gender identity, status as a veteran, and basis of disability or any other federal, state or local protected class.",
  //     Seniority_level: "Mid-Senior level",
  //     Employment_type: "Full-time",
  //     Job_function: "Research, Analyst, and Information Technology",
  //     Industries: "Gambling Facilities and Casinos",
  //     job_apply_link:
  //       "https://www.linkedin.com/jobs/view/externalApply/3761608109?url=https%3A%2F%2Fcareers%2Epeopleclick%2Ecom%2Fcareerscp%2Fclient_boydgaming%2Fexternal%2Fresults%2FjobDetails%2FjobDetail%2Ehtml%3FjobPostId%3D106155%26localeCode%3Den_US&urlHash=qWcs&trk=public_jobs_apply-link-offsite_sign-up-modal-sign-up-later",
  //   },
  //   {
  //     _id: {
  //       $oid: "6572d90318ed07e586a8286b",
  //     },
  //     job_position: "GIS Analyst",
  //     job_location: "Las Vegas, NV",
  //     company_name: "Fusion HCR",
  //     company_linkedin_id:
  //       "https://www.linkedin.com/company/fusion-hcr?trk=public_jobs_topcard-org-name",
  //     job_posting_time: "1 week ago",
  //     job_description:
  //       "FusionHCR is seeking multiple GIS Analysts for contract to permanent opportunities with our growing and stable client. The GIS Analyst is responsible for electronic mapping, drafting and facility information maintenance processes and maintains current knowledge of all our client's GIS applications including but not limited to: ESRI ArcGIS/ArcFM, AutoCAD, GPS software and hardware, engineering modeling applications, document management software, and company-specific manuals and procedures. This position evaluates workflow processes and initiates system efficiencies; creates and executes advanced spatial data queries using geoprocessing tools, Python programming language and/or SQL queries; performs analyses to support data requests for State, DOT and operations integrity programs.Apply GIS theories, principles, software and data to produce complex maps, web applications and other spatial products to meet customer requirementsDevelop and execute custom spatial queries using geoprocessing tools, Python and SQL to perform advanced analysis that identify spatial data patterns and trendsProvide technical work guidance and lead the activities on the GISAssist other departments in analyzing GIS data, review relationships with other datasets and provide concise reportsMaintain active liaison with local personnel and project management, keeping stakeholders informed of projects progress, discussing GIS issues and action items, and making required presentationsConduct user training on the GIS system, AutoCAD, GPS software, Capture and PaperVision system as appropriateProvide technical assistance to Division AutoCAD usersProvide technical assistance to Division GPS usersProvide custom facility maps for internal and external entitiesTechnologies include: ESRI ArcGIS and ArcFM, AutoCad, various GPS technologies, Python, SQL",
  //     Seniority_level: "Entry level",
  //     Employment_type: "Contract",
  //     Job_function: "Information Technology",
  //     Industries: "Human Resources Services",
  //     job_apply_link:
  //       "https://www.linkedin.com/jobs/view/externalApply/3776556713?url=https%3A%2F%2Ffusionhcr%2Ecatsone%2Ecom%2Fcareers%2F43293-General%2Fjobs%2F16342541-GIS-Analyst&urlHash=sEhm&trk=public_jobs_apply-link-offsite_sign-up-modal-sign-up-later",
  //   },
  // ];

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Top 25 Job Matches
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : jobMatches.length > 0 ? (
        jobMatches.map((job, index) => {
          console.log(jobMatches);
          const {
            job_position,
            job_location,
            company_name,
            Employment_type,
            job_apply_link,
          } = job;
          console.log(job);
          return (
            <Card
              key={index}
              sx={{
                minWidth: 275,
                marginBottom: 2,
                width: "70vw",
                height: "20vh",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography variant="h5" component="div">
                  {company_name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {job_position}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "1.1rem" }}>
                  <strong>Location:</strong> {job_location}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "1.1rem" }}>
                  <strong>Employment Type:</strong> {Employment_type}
                </Typography>
              </CardContent>
              <CardActions
                sx={{ alignSelf: "flex-end", marginRight: 2, marginBottom: 2 }}
              >
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  href={job_apply_link}
                  target="_blank"
                  sx={{
                    backgroundColor: "#000000",
                    color: "#FFFFFF",
                    fontWeight: "semibold",
                    "&:hover": {
                      backgroundColor: "#000000",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  Apply Now
                </Button>
              </CardActions>
            </Card>
          );
        })
      ) : (
        <Typography variant="body1">No job matches found</Typography>
      )}

      {/* {jobMatches.length > 0 ? (
        jobMatches.map((job, index) => {
          console.log(jobMatches);
          const {
            job_position,
            job_location,
            company_name,
            Employment_type,
            job_apply_link,
          } = job;
          console.log(job);
          return (
            <Card
              key={index}
              sx={{
                minWidth: 275,
                marginBottom: 2,
                width: "70vw",
                height: "20vh",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography variant="h5" component="div">
                  {company_name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {job_position}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "1.1rem" }}>
                  <strong>Location:</strong> {job_location}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "1.1rem" }}>
                  <strong>Employment Type:</strong> {Employment_type}
                </Typography>
              </CardContent>
              <CardActions
                sx={{ alignSelf: "flex-end", marginRight: 2, marginBottom: 2 }}
              >
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  href={job_apply_link}
                  target="_blank"
                  sx={{
                    backgroundColor: "#000000",
                    color: "#FFFFFF",
                    fontWeight: "semibold",
                    "&:hover": {
                      backgroundColor: "#000000",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  Apply Now
                </Button>
              </CardActions>
            </Card>
          );
        })
      ) : (
        <Typography variant="body1">No job matches found</Typography>
      )} */}
    </Box>
  );
};

export default JobMatches;
