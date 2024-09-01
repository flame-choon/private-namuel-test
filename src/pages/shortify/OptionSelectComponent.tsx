import React, { useEffect, useState } from 'react';
import {
    Spinner, Box, Select,RadioGroup
} from '@cloudscape-design/components';
import ContentLayout from "@cloudscape-design/components/content-layout";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Link from "@cloudscape-design/components/link";
import Alert from "@cloudscape-design/components/alert";
// import { type Highlight, readHighlight } from '../../apis/highlight';

interface OptionSelectComponentProps {
  id: string;
}



const OptionSelectComponent: React.FC<OptionSelectComponentProps> = (props) => {
    {/* 여기서는 api 호출이 없기 때문에 로딩바는 생략 */}
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
       setLoading(false);
    }, [])



    {/* 셀렉트박스 옵션 */}
    const [ selectedOption, setSelectedOption ] = React.useState({ label: "White background", value: "1" });



    const [selectedImage, setSelectedImage] = useState(null);
    const imageOptions = [
        {
            label: 'White',
            value: 'White',
            imgSrc: 'https://images.unsplash.com/photo-1619252584172-a83a949b6efd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D'
        },
        {
            label: 'Blue',
            value: 'Blue',
            imgSrc: 'https://media.istockphoto.com/id/1465760198/vector/abstract-blue-background-with-space-for-text.jpg?s=612x612&w=0&k=20&c=fXbSkVB3MdZjkaYUIX-Q7liCtmG5cr6kqAAzX-cM3L8='
        },
        {
            label: 'yellow',
            value: 'yellow',
            imgSrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAABAAIDBv/EABkQAQEBAQEBAAAAAAAAAAAAAAARASExEv/EABoBAQEBAQADAAAAAAAAAAAAAAEAAgMEBgf/xAAYEQEBAQEBAAAAAAAAAAAAAAAAEQESAv/aAAwDAQACEQMRAD8A91FGk+UPYqMwzEgqkookkTEGV1qKJUKGJIRQpABpRFlNRRKsoiIpTFFElBuNBKsxNKE0qFBmgo4KAikgiklFCogIoYokIoYolRFDFEhA1EkyikQjFEmUUkzE0iaYioGQYUEIcSSSRVQRQqCKioCMUVQRSqCKVISRoEUKRCIhQ4jFEikoAkVAqCcyFCiKNZihirEMbih5VYTcUPArMTcG4uFWFG4oOdVY3FG4ouTWIG4IIqwm4zAaEUiEkQ1FGoYsxmsrMbzDG88Csw5hhzG88CsxRuKNZ4VZMKjXIoijUMPKrEUbih5FYijcG4OTWImohwqxFG4Nxng1iCNxRjfBrnFuN6NxjfCrnFG4IzuNVuE5hjyM8sUQ5hWY3mCgmHG8wVmUwxQ55FEMJa5FZUaR5VZijSi5VZiaS5VZgjY3BymYoYmeTWYNaW+CGsQbjY1jcNYijUDnvk1uLGk75jNSMOY3nkUZhzCm4zRCcxQwURNRQxBNJRMppKJlNBRMxNRRRMKNQMw1mCNiCGs6N61uCM75LMDYY3DWjihzHXMZqRzDG8xkZhMOYcwBQlqCszS1FDmCiKNRGKsxRpGKsxRqCCKiDc61BuCKshpQRqsQRuBmFka1uCM7hZg1uDcZ3DScxZjTeYylDmGN5jO6DixqNZg3RDEWozVEkYt1BqKNQVlNRRRVlNRQRUCFCGswa2BDWE1AzuGsjWtwMbjTOhoM7hLWYMLeYNJzFhbzGFmFJvMG6sKw5jWYysxRrDjUAgjRMVYizG1qgZg3GkIaxA3uD5ETIa3AzuGgNBmNVlncbjLG41msiNbgYjRw4jjeYzunCC3jKKaxvGVmNYsTcCMRxobohhRzBRFCjAzuKNLcG4awjBohzRuMtjWNLAa0M7jWaBp0MbjTCKY3Gs04RhOMk4C3mM7pxoY03jKKOOmDSkWoxqRTpmAIpRAa0huJkaYtY1rGQdDO40zrOts656WVpGsa3jOhpljTj//Z'
        },
    ];
    const handleChange = ({ detail }) => {
        // 선택된 옵션을 찾기 위해 value와 일치하는 객체를 선택
        const selectedOption = imageOptions.find(option => option.value === detail.selectedOption.value);
        setSelectedImage(selectedOption);
    };

    {/* 라디오박스 타이틀 상태값  */}
    const [titleGroupValue, setTitleGroupValue] = useState(null);
    {/* 라디오박스 서브타이틀 상태값  */}
    const [subTitleGroupValue, setSubTitleGroupValue] = useState(null);


    const subTitleChange = (value) => {
        const newValue = value;
        setSubTitleGroupValue(newValue);
        onStateChange({title:newValue,subTitle:subTitleGroupValue})
    }
  if(loading)
    return <Box textAlign='center'><Spinner size='large'/></Box>
  return (
      <ContentLayout
          defaultPadding
          header={
              <SpaceBetween size="m">
                  <Alert statusIconAriaLabel="Info">
                      Shortify 생성할때 옵션을 선택합니다.
                  </Alert>
              </SpaceBetween>
          }
      >
          {/* 1번째 박스 영역*/}
          <Box margin={{ bottom: 'm' }}>
              <Container
                  header={
                      <Header
                          variant="h2"
                          description="Shortify 를 생성할때 뒷 배경을 선택합니다."
                      >
                          Shortify 배경 화면 선택하기
                      </Header>
                  }

              >
                  <Box>
                      <Select
                          selectedOption={selectedImage}
                          onChange={handleChange}
                          options={imageOptions.map(option => ({
                              label: (
                                  <Box display="flex" alignItems="center">
                                      <img
                                          src={option.imgSrc}
                                          alt={option.label}
                                          style={{ width: '80px', height: '80px', marginRight: '8px' }}
                                      />
                                      {option.label}
                                  </Box>
                              ),
                              value: option.value,
                          }))}
                          placeholder="Select an image"
                      />
                      {selectedImage && (
                          <Box margin={{ top: 'l' }}>
                              <Box textAlign="center" variant="p"> Preview Background Image</Box>
                              <img
                                  src={selectedImage.imgSrc}
                                  alt={selectedImage.label}
                                  style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }}
                              />
                          </Box>
                      )}
                  </Box>
              </Container>
          </Box>

          {/* 2번째 박스 영역*/}
          <Box margin={{ bottom: 'm' }}>
              <Container
                  header={
                      <Header
                          variant="h2"
                          description=" Title 생성 유뮤를 선택합니다."
                      >
                          Title 생성 유뮤
                      </Header>
                  }
              >
                <Box>

                    <RadioGroup
                      onChange={({ detail }) => setTitleGroupValue(detail.value)}
                      value={titleGroupValue}
                      items={[
                        { value: "on", label: "On" },
                        { value: "off", label: "Off" }
                      ]}
                    />
                </Box>
              </Container>
          </Box>

          {/* 3번째 박스 영역*/}
          <Box margin={{ bottom: 'm' }}>
              <Container
                  header={
                      <Header
                          variant="h2"
                          description="Subtitle 유무를 선택합니다."
                      >
                          Subtitle 유무
                      </Header>
                  }
              >
                <Box>
                    <RadioGroup
                      onChange={({detail})=> setSubTitleGroupValue(detail.value)}
                      value={subTitleGroupValue}
                      items={[
                        { value: "on", label: "On" },
                        { value: "off", label: "Off" }
                      ]}
                    />
                </Box>
              </Container>
          </Box>
      </ContentLayout>
   );
};

export default OptionSelectComponent;
