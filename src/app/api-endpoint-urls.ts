export class APIEndpointURLs {
  private static readonly baseUrl = '/java-api/api';

  // User
  public static readonly userUrl = APIEndpointURLs.baseUrl + '/user';
  public static readonly allUser = APIEndpointURLs.userUrl + '/all';
  public static readonly user = APIEndpointURLs.userUrl + '/id/';
  public static readonly myStuff = APIEndpointURLs.userUrl + '/stuff';

  //Employee
  public static readonly employeeUrl = APIEndpointURLs.baseUrl + '/employee';
  public static readonly createEmp = APIEndpointURLs.baseUrl + '/new';
  public static readonly allEmployee = APIEndpointURLs.employeeUrl + '/all-emp-pers';
  public static readonly employee = APIEndpointURLs.employeeUrl + '/id';
  public static readonly deleteEmp = APIEndpointURLs.employeeUrl + '/delete';
  public static readonly updateEmp = APIEndpointURLs.employeeUrl + '/update';


  // Auth
  public static readonly authUrl = APIEndpointURLs.baseUrl + '/auth';
  public static readonly registerUrl = APIEndpointURLs.authUrl + '/register';
  public static readonly loginUrl = APIEndpointURLs.authUrl + '/login';
}
