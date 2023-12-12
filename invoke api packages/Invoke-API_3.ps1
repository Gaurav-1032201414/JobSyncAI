$baseUrl = 'http://127.0.0.1:5000'
$url = "$baseUrl/scrape_jobs"

$data = @{
    answer1 = 'your_field_value'
    answer2 = 'your_geoid_value'
    resume = 'your_resume_text'
}

$response = Invoke-RestMethod -Uri $url -Method Post -Body ($data | ConvertTo-Json) -ContentType 'application/json'

if ($response.StatusCode -eq 200) {
    Write-Host "Scrape Jobs API Test Passed"
} else {
    Write-Host "Scrape Jobs API Test Failed"
}
