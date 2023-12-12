$baseUrl = 'http://127.0.0.1:5000'
$url = "$baseUrl/calculate_similarity"

$response = Invoke-RestMethod -Uri $url -Method Get

if ($response.StatusCode -eq 200) {
    Write-Host "Calculate Similarity API Test Passed"
} else {
    Write-Host "Calculate Similarity API Test Failed"
}
